// src/Pages/Skills.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // firebase.js에서 가져오기
import { collection, getDocs, addDoc } from "firebase/firestore";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchSkills = async () => {
    setLoading(true);
    setError("");

    try {
      const querySnapshot = await getDocs(collection(db, "skills"));
      const skillsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSkills(skillsData);
    } catch (err) {
      console.error(err);
      setError("스킬을 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const addSkill = async () => {
    const trimmedSkill = newSkill.trim();
    if (trimmedSkill === "" || isSubmitting) return;

    setIsSubmitting(true);
    setError("");

    try {
      await addDoc(collection(db, "skills"), { name: trimmedSkill });
      setNewSkill("");
      await fetchSkills();
    } catch (err) {
      console.error(err);
      setError("스킬 추가 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>My Skills</h2>
      {error && <p className="error">{error}</p>}
      {loading ? (
        <p>스킬을 불러오는 중입니다...</p>
      ) : (
        <ul>
          {skills.map(skill => (
            <li key={skill.id}>{skill.name}</li>
          ))}
        </ul>
      )}

      <div className="skill-form">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Add a new skill"
          disabled={isSubmitting}
        />
        <button onClick={addSkill} disabled={isSubmitting || newSkill.trim() === ""}>
          {isSubmitting ? "추가 중..." : "Add Skill"}
        </button>
      </div>
    </div>
  );
}

export default Skills;
