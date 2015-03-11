void Start () {
	PlayerPrefs.GetInt("moneyResource",0);
	if (PlayerPrefs.GetInt("lastLevelAvailable") == 0)
	{
		PlayerPrefs.SetInt("lastLevelAvailable", 1);
	}
	print(PlayerPrefs.GetInt("lastLevelAvailable"));
	PlayerPrefs.GetInt("isBazookaBought", 0);
	PlayerPrefs.GetInt("isMiniGunBought", 0);
	PlayerPrefs.SetInt("isCampfireBought", 1);
	PlayerPrefs.GetInt("isShieldBought", 0);
	PlayerPrefs.SetInt("isRifleBought", 1);
	PlayerPrefs.GetInt("maxMoney", 0);

	

	if(PlayerPrefs.GetString("bazookaState")!="Upgrade"){
		PlayerPrefs.SetString("bazookaState", "Buy");
		PlayerPrefs.SetInt("bazookaCost",200);
		PlayerPrefs.SetInt("bazookaDamage", 30);
	}

	if(PlayerPrefs.GetString("shieldState")!="Upgrade"){
		PlayerPrefs.SetString("shieldState", "Buy");
		PlayerPrefs.SetInt("shieldCost", 50);
		PlayerPrefs.SetInt("shieldHealth", 25);
		Debug.Log(PlayerPrefs.GetInt("shieldHealth"));
	}

	if (PlayerPrefs.GetString("minigunState") != "Upgrade")
	{
		PlayerPrefs.SetString("minigunState", "Buy");
		PlayerPrefs.SetInt("minigunCost", 150);
		PlayerPrefs.SetInt("minigunDamage", 10);
	}
}

	
	