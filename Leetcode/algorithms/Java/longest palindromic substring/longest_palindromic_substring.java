class Solution {
    public String longestPalindrome(String s) {
        
        if(s.length()<2)
            return s;

        String lps="";
        for(int i=1; i< s.length(); i++){
            int left = i, right=i;

            while(s.charAt(left) == s.charAt(right)){
                left--;
                right++;
                if(left == -1 || right == s.length())
                    break;
            }

            String subStr = s.substring(left+1,right);
            if(subStr.length() > lps.length())
                lps=subStr;
            
            //for even number 
            left = i-1;
            right=i;
            while(s.charAt(left) == s.charAt(right)){
                left--;
                right++;
                if(left == -1 || right == s.length())
                    break;
            }

            subStr = s.substring(left+1,right);
            if(subStr.length() > lps.length())
                lps=subStr;

        }

        return lps;
    }
}