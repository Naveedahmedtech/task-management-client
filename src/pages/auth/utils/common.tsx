import React from "react"
import Text from "../../../components/Text";
import { Link } from "react-router-dom";
import { IAdditionBody } from "../../../types/types";

export const AdditionalBody: React.FC<IAdditionBody> = ({ title, action, text, path }) => (
  <div className="mt-5">
    <div className="flex items-center gap-1">
      <Text className="text-sm text-text">{title}</Text>
      <Link to={path} className="text-sm text-blue-500 underline">
        {action}
      </Link>
    </div>
    <Text className="text-xs mt-2 text-text">
      {text}
    </Text>
  </div>
);

