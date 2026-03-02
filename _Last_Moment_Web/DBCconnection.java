import java.sql.Connection;
import java.sql.DriverManager;

public class DBCconnection {
    public static Connection getConnection() {
        try {
            Class.forName("org.postgresql.Driver");
            return DriverManager.getConnection(
                "jdbc:postgresql://localhost:5432/your_db_name",
                "postgres",
                "your_password"
            );
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}