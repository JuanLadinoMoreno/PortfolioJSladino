import { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

const FormContact = ({ FORMSPREE_ENDPOINT }) => {
    const [noAbailable, setNoAbailable] = useState("")

    const formRef = useRef(null); // 👈 Sin tipos de TypeScript

    const handleSubmit = async (e) => {
        console.log(e.currentTarget);
        
        e.preventDefault(); // 👈 Evita la recarga de la página
        setNoAbailable('pointer-events-none')

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                await Swal.fire("!Gracias por tu mensaje!", "Te escribiré pronto para seguir en contacto", "success");
                setNoAbailable('pointer-events-auto')
                formRef.current?.reset();
            } else {
                await Swal.fire("Error al enviar", "No se pudo enviar el mensaje ", "error");
                setNoAbailable('pointer-events-auto')
                formRef.current?.reset();
            }
        } catch (error) {
            await Swal.fire("Error al enviar", "Hubo un problema del servidor al enviar el mensaje ", "error");
            setNoAbailable('pointer-events-auto')
        }
    };

    return (
        <div className="my-6 mx-10" >
            <h3
                className="text-5xl p-1 font-bold bg-clip-text text-transparent text-center bg-gradient-to-r from-[#37527B] to-[#8CB7F9]"
            >
                Contáctame
            </h3>

            <div className="w-full flex justify-center items-center my-10 rounded-2xl bg-gradient-to-r from-[#37527B] to-[#031d44] shadow-[0_6px_10px_rgba(140,183,249,0.6)]" data-aos="flip-left" data-aos-duration="2000">
                {/* <div className="p-6 max-w-sm rounded-2xl shadow-lg bg-white/10 backdrop-blur-lg border border-white/40"> */}
                <div className="p-6 max-w-2xl rounded-2xl shadow-lg ">

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="space-y-12">
                            {/* <div className=" "> */}
                            <p className="mt-1 text-ms ">Deja un mensaje con los siguientes datos y me estaré comunicanco contigo.</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                <div>
                                    <div >
                                        <label className="block text-sm/6 font-medium ">Nombre</label>
                                        <div className="mt-2">
                                            <input type="text" name="name" id="name" rows="3" className="block w-full rounded-md bg-transparent px-3 py-1.5 text-base text-white font-semibold tracking-wider  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-50 sm:text-sm/6" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm/6 font-medium ">Correo electrónico</label>
                                        <div className="mt-2">
                                            <input type="email" name="email" id="email" rows="3" className="block w-full rounded-md bg-transparent px-3 py-1.5 text-base text-white font-semibold tracking-wider  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-50 sm:text-sm/6" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm/6 font-medium ">Mensaje</label>
                                    <div className="mt-2">
                                        <textarea name="message" id="message" rows="3" className="block w-full rounded-md bg-transparent px-3 py-4 text-base text-white tracking-wider outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-50 sm:text-sm/6" />
                                    </div>
                                </div>

                            </div>
                            {/* <button className="my-5 border-1 p-2 rounded-lg text-md font-bold hover:bg-white hover:text-blue-950 transition-all" type="submit">Enviar</button> */}
                            {/* </div> */}
                            <button
                                type="submit"
                                // className="float-end border-1 p-2 rounded-lg text-md font-bold hover:bg-white hover:text-blue-950 transition-all" 
                                className={`float-end border-1 p-2 rounded-lg text-md font-bold hover:bg-white hover:text-blue-950 transition-all cursor-pointer ${noAbailable}`}
                            >Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormContact;
