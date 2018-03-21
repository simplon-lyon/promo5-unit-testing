

describe('Account class', function() {

    let instance;

    beforeEach(function(){
        instance = new Account();
    });

    describe('deposit method', function() {


        it('should increase the account balance', function(){
            let spy = spyOn(instance.calculus, 'operation')
                            .and.returnValue(130);
            

            instance.deposit(30);
            expect(instance.balance).toBe(130);
            
        });
    });
    

});