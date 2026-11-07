
public class SessionDemo
{
  public static void main (String args[])
  {
      User u1 = new User(10);
      System.out.println ("Static value after JDK user 1: " +
                          u1.getStaticVar());

      User u2 = new User(20);
      System.out.println ("Static value after JDK user 2: " +
                          u2.getStaticVar());
  }
}
