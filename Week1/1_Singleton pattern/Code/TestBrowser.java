public class TestBrowser {
    public static void main(String[] args) {
        Browser.getInstance().dismesg();
    }
}

class Browser {
    private static Browser browser;

    private Browser() {}

    public static Browser getInstance() {
        if (browser == null) {
            browser = new Browser();
        }
        return browser;
    }

    public void dismesg() {
        System.out.println("Browser info");
    }
}
