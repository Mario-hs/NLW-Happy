function saveOrphanage(db, orphanage) {
    return db.run(`
    INSERT INTO orphanages (
        lat, 
        lng, 
        name, 
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
    ) VALUES (
        "${orphanage.lat}",
        "${orphanage.lng}",
        "${orphanage.name}",
        "${orphanage.about}",
        "${orphanage.whatsapp}",
        "${orphanage.images}",
        "${orphanage.instructions}",
        "${orphanage.opening_hours}",
        "${orphanage.open_on_weekends}"
    );
`)

/*await db.run(`
    INSERT INTO orphanages (
        lat, 
        lng, 
        name, 
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
    ) VALUES (
        "-21.0655145",
        "-41.6491519",
        "Lar dos meninos",
        "Presta assistência a crianças de 03 a 12 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        "968798913",
        "https://images.unsplash.com/photo-1537655780520-1e392ead81f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        "Horário de visitas Das 15h até 19h",
        "0"
    );
`)*/
}


module.exports = saveOrphanage;