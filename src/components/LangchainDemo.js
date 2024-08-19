import React, { useState } from 'react';
import axios from 'axios';

function LangchainDemo() {
    const [title, setTitle] = useState('');
    const [blogResult, setBlogResult] = useState(null);

    const getBlogResponse = async () => {
        try {
            const response = await axios.post('http://localhost:8000/generate-blog', {
                title: title
            });
            setBlogResult(response.data);
            console.log("*************")
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching blog:', error);
        }
    };

    return (
        <div>
            <h1>Langchain Blog Generator</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="Enter blog title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <button onClick={getBlogResponse}>Generate Blog</button>
            </div>
            <div>
                {blogResult && (
                    <div>
                        <h2>{blogResult.title}</h2>
                        <p><strong>Author:</strong> {blogResult.author}</p>
                        <p><strong>Date:</strong> {blogResult.date}</p>
                        <p><strong>Category:</strong> {blogResult.category}</p>
                        <p><strong>Tags:</strong> {blogResult.tags.join(', ')}</p>
                        <p><strong>Content:</strong> {blogResult.content}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LangchainDemo;
