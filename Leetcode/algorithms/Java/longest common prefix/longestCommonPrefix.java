class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0)
            return "";

        String first = strs[0];
        for (int i = first.length(); i >= 0; i--) {
            String prefix = first.substring(0, i);
            boolean allMatch = true;
            for (String word : strs) {
                if (!word.startsWith(prefix)) {
                    allMatch = false;
                    break;
                }
            }
            if (allMatch) {
                return prefix;
            }
        }
        return "";
    }
}