import React from "react";
import { Outlet } from "react-router-dom";
import './articles.css';
import '../../index.css';
import { motion } from "framer-motion";
import "../biography/biography.css";
import '../../index.css';
import data from './Data.json';

function Anderson() {

    const articleIdToTarget = 0;
  const targetedArticle = data.find(article => article.id === articleIdToTarget);

  if (!targetedArticle) {
    // Handle the case where the article with the specified id is not found
    return <p>Article not found</p>;
  }

    return (

        <motion.div className="containerConstruction" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>

            <div className="mxnifesto" >
               
                <h1 key={targetedArticle.id} className="title">{targetedArticle.title}</h1>
                <h3>{targetedArticle.description}</h3>
                <img src={targetedArticle.image} alt={targetedArticle.imageName}></img>
                <p className="manifestoParagraph">{targetedArticle.info}</p>
                <h5>{targetedArticle.copyright}</h5>
            </div>

            <Outlet />

        </motion.div>

    );
}

export default Anderson;