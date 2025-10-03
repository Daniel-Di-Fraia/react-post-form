//form per aggiungere un post nel blog

import { useState } from "react";

const FormBlog = () => {

    // variabile di stato di elementi form blog
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false,
    });

    // funzione di gestione complessivo stato form blog
    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // funzione di invio del form (post)
    function handleSubmit(e) {
        e.preventDefault();
        axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
            .then(res => { 
                console.log("dati inviati", res.data);
                alert("Richiesta per post suk blog inviata!");
            })
            .catch(error => {
                console.log(error);
                alert("Si è verificato un errore nella richiesta")
    });
}
    return (
        <>
            <div className="container mt-4">
                <h2>Richiesta post su blog</h2>
                <form
                    onSubmit={handleSubmit}
                    className="p-4 border rounded bg-light">
                    {/* Nome */}
                    <div className="mb-3">
                        <label className="form-label">Nome Autore</label>
                        <input
                            type="text"
                            name="author"
                            className="form-control"
                            required
                            value={formData.author}
                            onChange={handleChange}
                        />
                    </div>

                    {/* titolo */}
                    <div className="mb-3">
                        <label className="form-label">Titolo del post</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            required
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Descrizione post */}
                    <div className="mb-3">
                        <label className="form-label">Descrizione del Post</label>
                        <textarea
                            name="body"
                            className="form-control"
                            rows="4"
                            required
                            value={formData.body}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Checkbox pubblico o privato */}
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            name="public"
                            className="form-check-input"
                            checked={formData.public}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="updates">Pubblico o bozza?</label>
                    </div>

                    {/* Pulsante di invio */}
                    <button type="submit" className="btn btn-primary">Invia richiesta di post</button>
                </form>
            </div>
        </>
    )
}

export default FormBlog