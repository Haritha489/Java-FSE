public class ForecastTool {

    public static double futureValueRecursive(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return futureValueRecursive(presentValue, rate, years - 1) * (1 + rate);
    }

    public static double futureValueIterative(double presentValue, double rate, int years) {
        double futureValue = presentValue;
        for (int i = 0; i < years; i++) {
            futureValue *= (1 + rate);
        }
        return futureValue;
    }

    public static void main(String[] args) {
        double presentValue = 10000;
        double annualRate = 0.08;
        int years = 5;

        double resultRecursive = futureValueRecursive(presentValue, annualRate, years);
        double resultIterative = futureValueIterative(presentValue, annualRate, years);

        System.out.println("Future Value (Recursive): ₹" + resultRecursive);
        System.out.println("Future Value (Iterative): ₹" + resultIterative);
    }
}
