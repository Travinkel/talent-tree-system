class TalentTreeCharacterSheet extends ActorSheet5eCharacter {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["dnd5e", "sheet", "actor", "character", "talent-tree"],
            template: "modules/talent-tree-system/templates/talent-tree-sheet.html", // Make sure this path is correct
            width: 800,
            height: 700
        });
    }
    

    activateListeners(html) {
        super.activateListeners(html);
        html.find('.open-talent-tree').click(ev => {
            ev.preventDefault();
            this.openTalentTree();
        });
    }

    openTalentTree() {
        // TalentTreeDialog is defined in another part of my module
        const dialog = new TalentTreeDialog({actor: this.actor});
        dialog.render(true);
    }
}