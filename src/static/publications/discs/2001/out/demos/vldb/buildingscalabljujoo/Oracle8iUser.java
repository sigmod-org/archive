import java.sql.*;

public class Oracle8iUser
{
  Connection conn = null;
  CallableStatement procStmt = null;
  CallableStatement funcStmt = null;

  public Oracle8iUser(int aValue) {
    try {
       DriverManager.registerDriver(
                         new oracle.jdbc.driver.OracleDriver());
       conn = DriverManager.getConnection(
                            "jdbc:oracle:oci8:@",
                            "scott", "tiger");
      // Call the stored procedure SessionTest.incrementStaticVar.
      procStmt = conn.prepareCall (
                        "begin incrementStaticVar (?); end;");
      procStmt.setInt(1, aValue);
      procStmt.execute ();
      procStmt.close();   // Close the statement
    }
    catch (SQLException e) {}
    finally { try {
                if (procStmt != null) procStmt.close();
               } catch (SQLException ignored) {}
             }
  }

  public int getStaticVar() {
    int staticValue = -1;
    try {
      funcStmt = conn.prepareCall (
                        "begin ? := getStaticVar(); end;");
      funcStmt.registerOutParameter (1, Types.INTEGER);
      funcStmt.execute ();
      staticValue = funcStmt.getInt(1);
      funcStmt.close();
    }
      catch (SQLException e) {System.out.println("Error occurred: " + e);}
      finally { try {
                if (procStmt != null) procStmt.close();
                if (conn != null) conn.close();
               } catch (SQLException ignored) {}
             }
      return staticValue;
  }
}
