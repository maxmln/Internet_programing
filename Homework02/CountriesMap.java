import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

public class CountriesMap {
	
	private static final String KEY_GERMANY = "Germany";
	private static final String KEY_BULGARIA = "Bulgaria";
	private static final String KEY_RUSSIA = "RUSSIA";
	
	public static void main(String[] args){
			fillMap();
	}
	
	private static void fillMap(){
		final Map<String, Integer> m = new HashMap<String, Integer>();
		m.put(KEY_BULGARIA,7000000);
		m.put(KEY_GERMANY,80000000);
		m.put(KEY_RUSSIA,143000000);
		
		for (int next : m.values()) {
			if(next>10000000){
				System.out.println(next);
			}
		}
		
	}
}
