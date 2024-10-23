import React from "react";
import Image from "next/image";

export default function WebsitePage(){
    return(
        <section className=" flex flex-col md:flex-row justify-center items-center p-8 bg-white text-black min-h-screen">
            <div className="md:w-1/2 text-left space-y-4">
            <h1 className="text-4xl font-bold">Welcome to our Website</h1>
           
         <p  className=" text-gray-400 "> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum labore esse adipisci. Alias distinctio, quis, dignissimos, iusto assumenda non sunt dicta sapiente facilis dolorem dolore hic reiciendis aliquid soluta praesentium!</p>
<button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
    Contact-Us
</button>



</div>
<div className="md:w-1/2 mt-8 md:mt-0">
<Image src="/image.jpg" alt="https://images.unsplash.com/photo-1659952586072-b3cebadec6d2?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={400} height={300} className=" object-cover  h-auto"/>
        </div>
        </section>
    );
}