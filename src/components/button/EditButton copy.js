import React from "react";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router";

const EditButton = ({ path }) => {
  const navigate = useNavigate();
  return (
    <button className="btn-edit" onClick={() => navigate.push(path)}>
      <FiEdit size={16} />
    </button>
  );
};

export default EditButton;
