import React from "react";
import appwriteService from "../Appwrite/config";
import { Link } from "react-router-dom";
const PostCard = ({ $id, title, featuredImage, username }) => {
  return (
    <Link to={`/post/${$id}`}>
      <span className="block relative h-48 rounded overflow-hidden">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className="object-contain object-center w-full h-full block"
        />
      </span>
      <div className="mt-4">
        <h3 className="text-gray-500 leading-3 flex flex-wrap justify-center font-semibold uppercase text-xs tracking-widest title-font mb-1">
          {username}
        </h3>
        <h2 className="text-black title-font flex flex-wrap justify-center text-lg font-medium line-clamp-2">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default PostCard;
