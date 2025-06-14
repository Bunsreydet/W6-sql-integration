
//
//  This repository shall:
//  - Connect to the database (using the pool provided by the database.js)
// -  Perfrom the SQL querries to implement the bellow API
//

import { pool } from "../utils/database.js";

// Get all articles
export async function getAllArticles() {
    // TODO
    try{
        const [result] = await pool.query("SELECT * FROM articles");
        return result;
    } catch (err) {
        console.log("Fail to retrieve data: ", err);
        throw new Error("Database error: Failed to fetch articles");
    }
}

// Get one article by ID
export async function getArticleById(id) {
    // TODO
    try{
        const [result] = await pool.query("SELECT * FROM articles WHERE id = ?", [id]);
        return result;
    }catch(err){
        console.log("Fail to retrieve data: ", err);
        throw err;
    }
}

// Create a new article
export async function createArticle(article) {
    // TODO
    const { title, content, journalist, category } = article;
    try {
        const [result] = await pool.query("INSERT INTO articles(title, content, journalist, category) VALUES (?, ?, ?, ?)", [title, content, journalist, category]);
        return result;
    } catch (error) {
        console.log("Fail to retreive data: ", error);
        throw error;
    }
}

// Update an article by ID
export async function updateArticle(id, updatedData) {
    // TODO
    const { title, content, journalist, category } = updatedData;
    try {
        const [result] = await pool.query("UPDATE articles SET title = ?, content = ?, journalist = ?, category = ? WHERE id = ?", [title, content, journalist, category, id]);
        return result.affectedRows > 0;
    } catch (error) {
        console.log("Fail to retreive data: ", error);
        throw error;
    }
}

// Delete an article by ID
export async function deleteArticle(id) {
    // TODO
    try {
        const [result] = await pool.query("DELETE FROM articles WHERE id = ?", [id]);
        return result.affectedRows > 0;
    } catch (error){
        console.log("Fail to retreive data: ", error);
        throw error;
    }
}

