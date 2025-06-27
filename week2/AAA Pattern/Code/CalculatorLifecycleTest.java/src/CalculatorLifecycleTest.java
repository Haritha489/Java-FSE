import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorLifecycleTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Before each test");
    }

    @After
    public void tearDown() {
        calculator = null;
        System.out.println("After each test");
    }

    @Test
    public void testAdd() {
        int a = 10;
        int b = 5;
        int result = calculator.add(a, b);
        assertEquals(15, result);
    }

    @Test
    public void testSubtract() {
        int a = 10;
        int b = 3;
        int result = calculator.subtract(a, b);
        assertEquals(7, result);
    }
}

