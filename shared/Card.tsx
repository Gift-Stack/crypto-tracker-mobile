import { forwardRef, ForwardedRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextProps,
} from "react-native";
import { COLORS } from "./theme/colors";
import { TouchableOpacityProps } from "react-native";
import { ViewProps } from "react-native";

const Card = forwardRef(
  (
    { style, ...props }: TouchableOpacityProps,
    ref: ForwardedRef<TouchableOpacity>
  ) => (
    <TouchableOpacity
      activeOpacity={0.6}
      ref={ref}
      style={[styles.card, style]}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = forwardRef(
  ({ style, ...props }: ViewProps, ref: ForwardedRef<View>) => (
    <View ref={ref} style={[styles.cardHeader, style]} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef(
  ({ style, ...props }: TextProps, ref: ForwardedRef<Text>) => (
    <Text ref={ref} style={[styles.cardTitle, style]} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef(
  ({ style, ...props }: TextProps, ref: ForwardedRef<Text>) => (
    <Text ref={ref} style={[styles.cardDescription, style]} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef(
  ({ style, ...props }: ViewProps, ref: ForwardedRef<View>) => (
    <View ref={ref} style={[styles.cardContent, style]} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef(
  ({ style, ...props }: ViewProps, ref: ForwardedRef<View>) => (
    <View ref={ref} style={[styles.cardFooter, style]} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.SLATE,
    shadowColor: "rgb(0 0 0 / 0.05)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: COLORS.CARD,
    color: COLORS.CARD_FOREGROUND,
  },
  cardHeader: {
    display: "flex",
    gap: 6,
    padding: 24,
  },
  cardTitle: {
    fontWeight: "600",
    lineHeight: 16,
    letterSpacing: -0.4,
  },
  cardDescription: {
    fontSize: 14,
    color: COLORS.MUTED_FOREGROUND,
  },
  cardContent: {
    padding: 24,
    paddingTop: 0,
  },
  cardFooter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
    paddingTop: 0,
  },
});

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
