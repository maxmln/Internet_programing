package sockets;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateServer {
	public static int SERVER_PORT = 44014;
	public static void main(String[] args) throws IOException, ParseException {
		run();
	}

	public static void run() throws IOException, ParseException {
		ServerSocket serversocket = new ServerSocket(SERVER_PORT);
		Socket clientSocket = serversocket.accept();
		handleClient(clientSocket);
		serversocket.close();
	}
	
	public static String convertStringToDate( String dateStr ) throws ParseException {
		Date date = null;
		SimpleDateFormat df = new SimpleDateFormat("yy/MM/dd");
		
		date = df.parse(dateStr);
		
		long difference = date.getTime() - System.currentTimeMillis();
		long difference_Days = difference / (1000*60*60*24);
		
		String res = String.valueOf(difference_Days);
		return res;		
	}
	
	public static void handleClient(final Socket clientSocket) throws IOException, ParseException {
		final InputStream  inputStream = clientSocket.getInputStream();
		final OutputStream outputStream = clientSocket.getOutputStream();
		
		final InputStreamReader reader = new InputStreamReader(inputStream);	
		final BufferedReader in = new BufferedReader(reader);
		
		final PrintWriter out = new PrintWriter(outputStream);
		
		final String line = in.readLine();
				
		String resultInHours = convertStringToDate(line);
		
		out.println(resultInHours);
		out.flush();
		clientSocket.close();	
	}
}
