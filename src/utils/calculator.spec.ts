import { Calculator } from "./calculator";

describe('Test for calculator', () => {
    describe('Multiplication tests', () => {
        it('#multiply should return a 9', () => {
            // Arrange
            const calculator = new Calculator();
            // Act
            const multiplication = calculator.multiply(3,3);
            // Assert
            expect(multiplication).toEqual(9);
        });
    
        it('#multiply should return a 4', () => {
            // Arrange
            const calculator = new Calculator();
            // Act
            const multiplication = calculator.multiply(2, 2);
            // Assert
            expect(multiplication).toEqual(4);
        });
    });

    describe('Division tests', () => {
        it('#divide should return a 2', () => {
            const calculator = new Calculator();
            expect(calculator.divide(6, 3)).toEqual(2);
            expect(calculator.divide(4, 2)).toEqual(2);
        });
        it('#divide should return null', () => {
            const calculator = new Calculator();
            expect(calculator.divide(6, 0)).toBeNull();
        });
    });

    it('test matchers', () => {
        const name = 'miriam';
        let name2;
        expect(name).toBeDefined();
        expect(name2).toBeUndefined();
        expect(1 + 3 === 4).toBeTruthy();
        expect(1 + 1 === 3).toBeFalsy();
        expect(5).toBeLessThan(10);
        expect(20).toBeGreaterThan(10);
        expect('123456').toMatch(/123/); // Expresión regular
        expect(['apples', 'oranges']).toContain('oranges');
    })
});