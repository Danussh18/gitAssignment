public class Deadlock {
    public static void main(String[] args) {
        String resource1 = "Resource1";
        String resource2 = "Resource2";

        Thread thread1 = new Thread(() -> {
            synchronized (resource1){
                System.out.println("In Thread name "+Thread.currentThread().getName());
                System.out.println("Acquired Lock on Resource1");
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

                synchronized (resource2){
                    System.out.println("In Thread name "+Thread.currentThread().getName());
                    System.out.println("Acquired Lock on Resource2");
                }
            }
        });

        Thread thread2 = new Thread(() -> {
            synchronized (resource2){
                System.out.println("In Thread name "+Thread.currentThread().getName());
                System.out.println("Acquired Lock on Resource2");
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

                synchronized (resource1){
                    System.out.println("In Thread name "+Thread.currentThread().getName());
                    System.out.println("Acquired Lock on Resource1");
                }
            }
        });

        thread1.start();
        thread2.start();
    }
}