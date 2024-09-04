import React from "react";
import cls from "./SquareList.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { SquareType } from "../../types";
import { useAppSelector } from "../../store/hooks";

export const SquareList: React.FC = () => {
  const squares: SquareType[] = useAppSelector((state) => state.squares.squares);

  if (!squares.length) {
    return null;
  }

  return (
    <div className={cls.SquareList}>
      <AnimatePresence>
        {squares.map((square) => (
          <motion.div
            key={square.id}
            className={cls.Square}
            style={{ backgroundColor: square.color }}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
