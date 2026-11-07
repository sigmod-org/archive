
public class User
{
  public User(int aValue) {
    SessionTest.incrementStaticVar(aValue);
  }

  public static int getStaticVar() {
     return SessionTest.getStaticVar();
  }
}
