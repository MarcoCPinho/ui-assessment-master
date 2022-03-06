package br.com.notes.util;
import br.com.notes.dto.generic.DTOAbstract;
import br.com.notes.entity.generic.EntityAbstract;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.Arrays;
import java.util.Collection;

public class CommonsUtil {

    public static Boolean isAllNull(Object... o) {
        return Arrays.asList(o).stream().allMatch(CommonsUtil::isNull);
    }

    public static Boolean isNull(Object o) {
        if(o instanceof String) {
            return (o == null || ((String) o).isEmpty()) ? Boolean.TRUE : Boolean.FALSE;
        }
        return (o == null) ? Boolean.TRUE : Boolean.FALSE;
    }

    public static Boolean isNew(EntityAbstract o) {
        if (isNull(o)) return Boolean.TRUE;
        return (o.getId() == null) ? Boolean.TRUE : Boolean.FALSE;
    }

    public static Boolean isNew(DTOAbstract o) {
        if (isNull(o)) return Boolean.TRUE;
        return (o .getId() == null) ? Boolean.TRUE : Boolean.FALSE;
    }

    public static Boolean isNotNew(EntityAbstract o) {
        if (isNull(o)) return Boolean.FALSE;
        return (o.getId() == null) ? Boolean.FALSE : Boolean.TRUE;
    }

    public static Boolean isNotNew(DTOAbstract objeto) {
        if (isNull(objeto)) return Boolean.FALSE;
        return (objeto.getId() == null) ? Boolean.FALSE : Boolean.TRUE;
    }

    public static Boolean isNotNull(Object o) {
        if(o instanceof String) {
            return (o == null || ((String) o).isEmpty()) ?  Boolean.FALSE : Boolean.TRUE;
        }
        return (o == null) ? Boolean.FALSE : Boolean.TRUE;
    }

    public static String onlyNumber(String value){
        if (CommonsUtil.isNull(value)) return null;
        return value.replaceAll("[^0-9]", "");
    }

    public static boolean isNumber(String numero) {
        try {
            Long.parseLong(numero);
        } catch (NumberFormatException e) {
            return false;
        }
        return true;
    }

    public static BigDecimal BigDecimalOrZero(BigDecimal value) {
        return isNotNull(value) ? value : BigDecimal.ZERO;
    }

    public static Double DoubleOrZero(Double value) {
        return isNotNull(value) ? value : 0.00;
    }

    public static boolean isEqual(BigDecimal valor1, BigDecimal valor2) {
        valor1 = CommonsUtil.isNull(valor1) ? BigDecimal.ZERO : valor1;
        valor2 = CommonsUtil.isNull(valor2) ? BigDecimal.ZERO : valor2;
        return valor1.compareTo(valor2) == 0;
    }

    public static boolean isNotEqual(BigDecimal valor1, BigDecimal valor2) {
        return !isEqual(valor1,valor2);
    }

    public static boolean isEqual(Integer valor1, Integer valor2) {
        valor1 = CommonsUtil.isNull(valor1) ? 0 : valor1;
        valor2 = CommonsUtil.isNull(valor2) ? 0 : valor2;
        return valor1.compareTo(valor2) == 0;
    }

    public static boolean isNotEqual(Integer valor1, Integer valor2) {
        return !isEqual(valor1,valor2);
    }

    public static Long zeroIfNull(Long value) {
        return isNotNull(value) ? value : 0;
    }

    public static BigDecimal zeroIfNegative(BigDecimal valor) {
        if (CommonsUtil.isNull(valor)) return BigDecimal.ZERO;
        if (valor.compareTo(BigDecimal.ZERO) < 0) return BigDecimal.ZERO;
        return valor;
    }

    public static String formatNumber(Object value, DecimalFormat df) {
        if (CommonsUtil.isNull(value) || CommonsUtil.isNull(df)) {
            return df.format(0L);
        }
        return df.format(value);
    }

    public static BigDecimal sub(BigDecimal valor1, BigDecimal valor2) {
        if (CommonsUtil.isNull(valor1)) {
            valor1 = BigDecimal.ZERO;
        }

        if (CommonsUtil.isNull(valor2)) {
            valor2 = BigDecimal.ZERO;
        }
        return valor1.subtract(valor2);
    }

    public static BigDecimal sum(BigDecimal valor1, BigDecimal valor2) {
        if (CommonsUtil.isNull(valor1)) {
            valor1 = BigDecimal.ZERO;
        }

        if (CommonsUtil.isNull(valor2)) {
            valor2 = BigDecimal.ZERO;
        }
        return valor1.add(valor2);
    }

    public static Boolean isBigDecimalGreaterThanZero(Object param) {
        //usa o método para validar se o objeto é nulo
        if ( !isNull(param)) {
            try {
                BigDecimal value = new BigDecimal(param.toString());
                return value.compareTo(BigDecimal.ZERO) > 0;
            } catch (Exception e) {
                return Boolean.FALSE;
            }
        }
        return Boolean.FALSE;
    }
}
