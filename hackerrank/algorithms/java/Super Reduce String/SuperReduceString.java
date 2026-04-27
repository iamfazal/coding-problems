public static String superReducedString(String s) {
    StringBuilder stack = new StringBuilder();

    for (char ch : s.toCharArray()) {
        int len = stack.length();

        if (len > 0 && stack.charAt(len - 1) == ch) {
            stack.deleteCharAt(len - 1); // remove pair
        } else {
            stack.append(ch);
        }
    }

    return stack.length() > 0 ? stack.toString() : "Empty String";
}