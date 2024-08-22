import React, { useState } from 'react';

const Generate = () => {
    const [prompt, setPrompt] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://9ba8-34-125-20-91.ngrok-free.app/generate_image", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    prompt: prompt,
                    uncond_prompt: "",
                    strength: 0.9,
                    sampler: "ddpm",
                    num_inference_steps: 1,
                    seed: 42,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Image Data:', data.image_data);
                const imageSrc = `data:image/png;base64,${data.image_data}`;
                setImage(imageSrc);
            } else {
                console.error("Error generating image:", data.detail);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleSaveImage = () => {
        if (image) {
            const link = document.createElement('a');
            link.href = image;
            link.download = 'generated_image.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">Generate Image</h2>
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter your prompt"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                >
                    Generate Image
                </button>
            </form>
            {image && (
                <div className="mt-8 flex flex-col items-center">
                    <img src={image} alt="Generated Output" className="max-w-full max-h-80 object-contain mb-4" />
                    <button
                        onClick={handleSaveImage}
                        className="py-2 px-4 bg-green-500 text-white font-bold rounded hover:bg-green-600"
                    >
                        Save Image
                    </button>
                </div>
            )}
        </div>
    );
        
}

export default Generate;
