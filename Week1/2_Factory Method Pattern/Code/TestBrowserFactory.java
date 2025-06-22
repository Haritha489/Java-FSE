public class TestBrowserFactory {
    public static void main(String[] args) {
        Browser chrome = BrowserFactory.createBrowser("chrome");
        chrome.open();

        Browser firefox = BrowserFactory.createBrowser("firefox");
        firefox.open();

        Browser unknown = BrowserFactory.createBrowser("safari");
        unknown.open();
    }
}

interface Browser {
    void open();
}

class ChromeBrowser implements Browser {
    public void open() {
        System.out.println("Opening Chrome Browser");
    }
}

class FirefoxBrowser implements Browser {
    public void open() {
        System.out.println("Opening Firefox Browser");
    }
}

class DefaultBrowser implements Browser {
    public void open() {
        System.out.println("Opening Default Browser");
    }
}

class BrowserFactory {
    public static Browser createBrowser(String type) {
        if (type.equalsIgnoreCase("chrome")) {
            return new ChromeBrowser();
        } else if (type.equalsIgnoreCase("firefox")) {
            return new FirefoxBrowser();
        } else {
            return new DefaultBrowser();
        }
    }
}
