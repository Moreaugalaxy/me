// src/Pages/Skills.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // firebase.js에서 가져오기
import { collection, getDocs, addDoc } from "firebase/firestore";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  // Firestore에서 스킬 목록 불러오기
  useEffect(() => {
    const fetchSkills = async () => {
      const querySnapshot = await getDocs(collection(db, "skills"));
      const skillsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSkills(skillsData);
    };

    fetchSkills();
  }, []);

  // Firestore에 새 스킬 추가하기
  const addSkill = async () => {
    if (newSkill.trim() === "") return;
    await addDoc(collection(db, "skills"), { name: newSkill });
    setNewSkill("");
    // 다시 불러오기
    const querySnapshot = await getDocs(collection(db, "skills"));
    setSkills(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  return (
    <div>
      <h2>My Skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="Add a new skill"
      />
      <button onClick={addSkill}>Add Skill</button>
    </div>
  );
}

export default Skills;
