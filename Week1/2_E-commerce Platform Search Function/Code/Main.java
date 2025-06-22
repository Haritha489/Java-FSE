import java.util.Arrays;
import java.util.Comparator;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public String toString() {
        return "Product{" +
               "productId=" + productId +
               ", productName='" + productName + '\'' +
               ", category='" + category + '\'' +
               '}';
    }
}

public class Main {

    // Linear search - no sorting required
    public static Product linearSearch(Product[] products, String name) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(name)) {
                return p;
            }
        }
        return null;
    }

    // Binary search - array must be sorted by productName
    public static Product binarySearch(Product[] products, String name) {
        // Sort the array by productName before performing binary search
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(name);

            if (cmp == 0)
                return products[mid];
            else if (cmp < 0)
                left = mid + 1;
            else
                right = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Smartphone", "Electronics"),
            new Product(103, "Shoes", "Footwear"),
            new Product(104, "Backpack", "Bags"),
            new Product(105, "Watch", "Accessories")
        };

        String searchTerm = "Shoes";

        // Linear Search
        Product linearResult = linearSearch(products, searchTerm);
        System.out.println("Linear Search Result:");
        if (linearResult != null)
            System.out.println(linearResult);
        else
            System.out.println("Product not found.");

        // Binary Search
        Product binaryResult = binarySearch(products, searchTerm);
        System.out.println("\nBinary Search Result:");
        if (binaryResult != null)
            System.out.println(binaryResult);
        else
            System.out.println("Product not found.");
    }
}
