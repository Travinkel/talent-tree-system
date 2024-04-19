import { TalentTreeCharacterSheet } from "./talent-tree-sheet";


Hooks.once('init', function() {
    console.log('Initializing Talent Tree System');

    Actors.unregisterSheet("core", ActorSheet5eCharacter); 
    Actors.registerSheet("dnd5e", TalentTreeCharacterSheet, { makeDefault: true});

});

Hooks.once('ready', function() {
    console.log('Talent Tree System is ready');
});

Hooks.on('setup', function() {
    console.log('Setting up Talent Tree System');
});

Hooks.on('renderChatLog', (app, html, data) => {
    console.log('Chat Log is being rendered');
});

Hooks.on('renderActorSheet', (app, html, data) => {
    const tabs = html.find('.tabs .item');
    const content = html.find('.tab');

    tabs.click(function() {
        tabs.removeClass('active');
        content.removeClass('active');

        const tab = $(this);
        const target = tab.data('tab');

        tab.addClass('active');
        html.find(`.tab[data-tab="${target}"]`).addClass('active');
    });
});



function loadTalents() {
    // Implementation for loading talent JSON data
}

function applyTalentToActor(actor, talentId) {
    // Implementation for applying a talent to an actor
}
