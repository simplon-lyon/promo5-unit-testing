

describe('Account class', function() {

    let instance;
    /**
     * La méthode beforeEach sera appelé avant chacun des tests contenus
     * dans ce describe, elle permet de mettre en place l'environnement
     * de test partagés par tous les tests ou tout un groupe de test.
     * Ici, on instancie Account afin que tous les tests partent avec une
     * instance fraîche.
     */
    beforeEach(function(){
        instance = new Account();
    });

    describe('deposit method', function() {


        it('should increase the account balance', function(){
            /**
             * Les tests unitaires doivent testé les différentes méthodes
             * de manière isolée et contrôlée, ainsi, dans le cas d'une
             * méthode qui utilise une autre classe ou une fonction externe,
             * on ne veut pas que notre test dépende de cette autre chose.
             * On va donc créer un "mock" de la méthode en question, une version
             * bidon de cette méthode à laquelle on pourra indiquer ses valeurs
             * de retour et autre.
             * Ici, on fait un mock de la méthode operation() de la propriété
             * calculus de notre instance de Account, et on lui dit qu'elle renverra
             * 130, et ce, peu importe les argument qu'on lui donne.
             */
            let spy = spyOn(instance.calculus, 'operation')
                            .and.returnValue(130);
            
            //On déclenche la méthode à tester
            instance.deposit(30);
            //On vérifie que la balance a bien été mise à jour
            expect(instance.balance).toBe(130);
            //On vérifie que notre mock a bien été appelé avec les arguments indiqués
            expect(instance.calculus.operation)
                .toHaveBeenCalledWith(100, 30, '+');
            //On vérifie que le mock a bien été utilisé
            // expect(instance.calculus.operation)
            //     .toHaveBeenCalled();
            //On vérifie que le mock a bien été utilisé une seule fois
            // expect(instance.calculus.operation)
            //     .toHaveBeenCalledTimes(1);
            
        });
    });
    

});