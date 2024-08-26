import { createContext, useState, useEffect } from 'react';

const baseUrl = "http://34.207.70.139:8000/essay"; // FastAPI URL

export const AppContext = createContext();

function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    
    // Function to fetch blog posts from FastAPI
    async function fetchBlogPosts(topic = "Machine Learning", tag = null, category = null) {
        setLoading(true);
        
        try {
            // Prepare the payload with topic, tag, and category if available
            const payload = { input: { topic } };
            
            if (tag) {
                payload.input.tag = tag;
            }
            
            if (category) {
                payload.input.category = category;
            }
    
            // Send the POST request
            const response = await fetch(`${baseUrl}/invoke`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
    
            // Log the raw response
            console.log("Raw API response:", response);
    
            // Parse the response as JSON
            const data = await response.json();
    
            // Log the parsed JSON response
            console.log("Parsed API response:", data);
    
            // Check if content is available and remove markdown syntax
            const content = data.output.content;
            console.log("content before cleaning")
            console.log(content);
            
            const cleanedContent = content.replace(/.*```json\s*|\s*```$/g, '').trim(); // Remove ```json and ```
            console.log("content after cleaned")
            console.log(cleanedContent)
            // Parse the cleaned JSON content
            const postsData = JSON.parse(cleanedContent);
    
            if (postsData && postsData.posts) {
                console.log("Extracted posts:", postsData.posts);
                setPosts(postsData.posts); // Set the posts array
            } else {
                console.warn("No posts found in API response");
                setPosts([]);
            }
        } catch (error) {
            console.error("Error in fetching data:", error);
            setPosts([]);  // Set an empty array if there was an error
        }
    
        setLoading(false);
    }
      
    useEffect(() => {
        fetchBlogPosts(); // Fetch initial data
    }, []);

    const value = { 
        posts,
        setPosts,
        loading,
        setLoading,
        fetchBlogPosts,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;
