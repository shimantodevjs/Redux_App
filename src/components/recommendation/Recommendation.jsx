import React from "react";
import "./recommendation.css";
import { useSelector } from "react-redux";

export default function Recommendation({ type }) {
  const name = useSelector(state=>state.user.name)
  const title =
    type === "user"
      ? `Reccomended for ${name}`
      : type === "popular"
      ? "Popular on Lama App"
      : "Editor's choice";

  const img =
    type === "user"
      ? "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=939&q=80"
      : type === "popular"
      ? "https://images.unsplash.com/photo-1601751839329-dd71d6428a5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      : "https://images.unsplash.com/photo-1507120410856-1f35574c3b45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbHBhcGVyJTIwZm9yJTIwbGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60";

  return (
    <div className="recommendation">
      <span className="rightTitle">{title}</span>
      <img className="rightImg" src={img} alt="" />
    </div>
  );
}
