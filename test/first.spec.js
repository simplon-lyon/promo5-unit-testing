
/**
 * Décrit un groupe de test case
 */
describe('jasmine syntax', function() {

    /**
     * Un test case avec une description de son scénario
     */
    it('should pass', function() {
        expect(true).toBe(true);
    });

    /**
     * On fait un groupe de test pour la méthode/fonction à tester
     */
    describe('concabloup function', function() {
        /**
         * On écrit les différents scénarios de test dans des test cases
         * séparés. Ici, on fait un test nominal
         */
        it('should return testbloup', function() {
            let param = 'test';
            let expectedResult = 'testbloup';
            let result = concabloup(param);

            expect(result).toBe(expectedResult);

            //expect(concabloup('test')).toBe('testbloup');
        });

        /**
         * On fait un autre test avec un paramètre "étrange", ici du number
         * en lui disant qu'on s'attend à ce que ça convertisse en string
         */
        it('should convert number to string', function() {
            let param = 10;
            let expectedResult = '10bloup';
            let result = concabloup(param);

            expect(result).toBe(expectedResult);
        });
        /**
         * On peut faire des tests où on s'attend à ce que la function
         * renvoie une erreur.
         * Ici, on dit que quand on donne un objet en paramètre, on doit
         * avoir une Error avec comme message 'no object'
         */
        it('should throw error with object',function() {
            let param = {};
            //Dans le cas d'un test d'erreur, on doit mettre l'exécution
            //de la fonction à l'intérieur d'une fonction anonyme
            //puis indiquer dans le toThrow le type d'erreur attendue
            expect(() => concabloup(param)).toThrow(new Error('no object'));

        });
    
    });


});