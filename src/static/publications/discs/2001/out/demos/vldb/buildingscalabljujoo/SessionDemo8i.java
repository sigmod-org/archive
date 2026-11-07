import java.sql.*;

class SessionDemo8i
{
  public static void main (String args[])
  {
     Oracle8iUser u1 = new Oracle8iUser(10);
     System.out.println ("Static value after 8i user 1: " +
                         u1.getStaticVar());

     Oracle8iUser u2 = new Oracle8iUser(20);
     System.out.println ("Static value after 8i user 2: " +
                         u2.getStaticVar());
  }
}
