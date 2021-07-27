public class DeadlockPrevention {
    public static boolean flag = true;
    public static void main(String[] args) throws InterruptedException {

        String resource1 = "Resource1";
        String resource2 = "Resource2";

        Thread thread1 = new Thread(()->
        {
            while(flag){}
            try {
                Thread.sleep(10000);  // Even After sleeping It wont be into deadlock as there is flag variable
                // but problem is it acts as single processing if we have any shared variable then its a best practise to use
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("In Thread name "+Thread.currentThread().getName());
            System.out.println("Acquired Lock on "+resource1);
            System.out.println("Acquired Lock on "+resource2);
            System.out.println("end");
        });


        Thread thread2 = new Thread(()->
        {
            flag = false;
            System.out.println("In Thread name "+Thread.currentThread().getName());
            System.out.println("Acquired Lock on "+resource2);
            System.out.println("Acquired Lock on "+resource1);
            System.out.println("changed");
        });

        thread1.start();
        thread2.start();
    }
}
