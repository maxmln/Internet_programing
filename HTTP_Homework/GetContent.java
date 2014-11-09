import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;


public class GetContent {
	private static final String HTTP_METHOD_GET = "GET";
	private static final int HTTP_PORT = 80 ;
	private static final String PROTOCOL_VERSION = "HTTP/1.1";
	private static final String HOST_NAME = "google.bg";
	
	public static void main(String[] args) throws UnknownHostException, IOException {
		final GetContent example = new GetContent();
		CharacterHttpResponse response = example.createRequest(HOST_NAME,
				HTTP_METHOD_GET, "/index.html");
		String statusLine = new String(response.getStatusLine());
		System.out.println(statusLine);
		if(statusLine.indexOf("301")>0 || statusLine.indexOf("302")>0){
			for (HttpHeader next : response.getHeaders()) {
				
				System.out.printf("%s: %s\n", next.getName(), next.getValue());
				if(next.getName().indexOf("ocation") > 0){
					
					response = example.createRequest(next.getValue().replace("http://","").replace("/index.html", ""), 
							HTTP_METHOD_GET,"/index.html");
					statusLine = new String(response.getStatusLine());
					System.out.println(statusLine);
					for (HttpHeader next1 : response.getHeaders()) {
						System.out.printf("%s: %s\n", next1.getName(), next1.getValue());
					}
					System.out.println(new String(response.getBody()));
				}
			}
		}

	}
	
	public CharacterHttpResponse createRequest(String host, String method,
			String path)
			throws UnknownHostException, IOException {
		final Socket clientSocket = new Socket(host, HTTP_PORT);
		try {
			final InputStream inputStream = clientSocket .getInputStream();
			final OutputStream outputStream = clientSocket.getOutputStream();
			
			final InputStreamReader inputStreamReader =
				new InputStreamReader(inputStream);
			final BufferedReader in = new BufferedReader(inputStreamReader);
			final PrintWriter out = new PrintWriter(outputStream);

			writeRequest(out, host, method, path);
			out.flush();
			
			return parseResponse(in);
		} finally {
			// we should ALWAYS close sockets!
			clientSocket.close();
		}
	
	}
	
	private CharacterHttpResponse parseResponse(BufferedReader in) throws IOException {
		final CharacterHttpResponse result = new CharacterHttpResponse();
		
		//reading status line
		result.setStatusLine(in.readLine());
		
		// reading headers until new line - this is marker for end of headers
		String next;
		while(!(next = in.readLine()).equals("")) {
			result.getHeaders().add(HttpHeader.createFromHeaderLine(next));
		}
		in.read(result.getBody());
		return result;
	}

	private void writeRequest(PrintWriter out, String host, String method,
			String path) {
		out.printf("%s %s %s\n", method, path, PROTOCOL_VERSION);
		out.printf("Host: %s\n", host);
		out.printf("\n");
		
	}
}
