
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

        it('should return NaN when a or b is NaN', function() {
            expect(calculus.operation('bloup', 2, '*')).toBeNaN();
            expect(calculus.operation('bloup', 2, '/')).toBeNaN();
            expect(calculus.operation('bloup', 2, '-')).toBeNaN();
            expect(calculus.operation('bloup', 2, '+')).toBeNaN();
        });

        it('should not crash when dividing by zero', function() {
            expect(calculus.operation(10, 0, '/')).toBe(Infinity);
        });

        it('should throw Error when wrong operand', function() {
            expect(() => calculus.operation(0, 0, 'bloup'))
            .toThrow(new Error('wrong operand given'));
        });
    });
    
})