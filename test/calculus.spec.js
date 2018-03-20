
describe('calculus class',function () {

    let calculus;
    beforeEach(function () {
       calculus = new Calculus();
        
    });

    describe('operation method',function () {

        it('should add a and b',function () {
            
            expect(calculus.operation(2,2,"+")).toBe(4);
            
        });

        it('should soustract a and b',function () {
            
            expect(calculus.operation(20,5,"-")).toBe(15);
            
        });

        it('should multiply a and b',function () {
            
            expect(calculus.operation(20,2,"*")).toBe(40);
            
        });

        it('should divide a and b',function () {
             
            expect(calculus.operation(20,2,"/")).toBe(10);
            
        });
    });
    
})