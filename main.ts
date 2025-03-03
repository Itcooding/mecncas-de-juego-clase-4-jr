// Comando "1"
player.onChat("1", function () {
    agent.teleportToPlayer();
    agent.move(FORWARD, 1);
    agent.setItem(MONSTER_SPAWNER, 64, 1);
    agent.move(UP, 1);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 15; j++) {
            agent.place(DOWN);
            agent.move(UP, 1);
            agent.place(DOWN);
            agent.move(FORWARD, 1);
            agent.move(DOWN, 1);
        }
        agent.turn(LEFT_TURN);
    }
    player.runChatCommand("lava");
});

// Cuando el jugador muere
player.onDied(function () {
    gameplay.timeSet(gameplay.time(DAY));
    gameplay.setGameMode(CREATIVE, mobs.target(ALL_PLAYERS));
});

// Cuando interactúa con una espada de diamante
player.onItemInteracted(DIAMOND_SWORD, function () {
    // Aquí parece que falta algo en tu código original
});

// Comando "play" optimizado con título en grande
player.onChat("play", function () {
    gameplay.title(mobs.target(ALL_PLAYERS), "A JUGAR", ""); // Título grande en pantalla

    // Lista de ítems a dar a los jugadores
    const itemsToGive = [
        { item: DIAMOND_CHESTPLATE, amount: 1 },
        { item: DIAMOND, amount: 1 },
        { item: DIAMOND_SWORD, amount: 1 },
        { item: DIAMOND_LEGGINGS, amount: 1 },
        { item: DIAMOND_HELMET, amount: 1 },
    ];

    // Iterar sobre la lista y dar cada ítem
    itemsToGive.forEach(({ item, amount }) => {
        mobs.give(mobs.target(ALL_PLAYERS), item, amount);
    });

    gameplay.timeSet(gameplay.time(NIGHT));
    gameplay.setGameMode(SURVIVAL, mobs.target(ALL_PLAYERS));
});

// Comando "lava"
player.onChat("lava", function () {
    agent.move(DOWN, 2);
    agent.setSlot(2);
    agent.setItem(LAVA_BUCKET, 1, 2);
    for (let i = 0; i < 15; i++) {
        agent.destroy(DOWN);
        agent.place(DOWN);
        agent.move(FORWARD, 1);
    }
});

// Cuando interactúa con un diamante
player.onItemInteracted(DIAMOND, function () {
    mobs.spawn(mobs.monster(ZOMBIE), pos(0, 0, 0));
});