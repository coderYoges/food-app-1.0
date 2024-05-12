import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getUsers();
  }, []);
  console.log(users);
  return <div />;
};

export default AdminPage;
