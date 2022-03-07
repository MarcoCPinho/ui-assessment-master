package br.com.notes.util;

public class CommonsUtil {

    public static Boolean isNull(Object o) {
        if (o instanceof String) {
            return (o == null || ((String) o).isEmpty()) ? Boolean.TRUE : Boolean.FALSE;
        }
        return (o == null) ? Boolean.TRUE : Boolean.FALSE;
    }

    public static Boolean isNotNull(Object o) {
        if (o instanceof String) {
            return (o == null || ((String) o).isEmpty()) ? Boolean.FALSE : Boolean.TRUE;
        }
        return (o == null) ? Boolean.FALSE : Boolean.TRUE;
    }

}
