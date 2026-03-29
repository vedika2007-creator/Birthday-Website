import java.io.*;
import java.net.*;

public class BirthdayServer {

public static void main(String[] args) throws Exception {

ServerSocket server = new ServerSocket(8080);

System.out.println("Server running...");

while(true){

Socket socket = server.accept();

PrintWriter out = new PrintWriter(socket.getOutputStream(), true);

out.println("Happy Birthday from Java Server!");

socket.close();

}

}

}