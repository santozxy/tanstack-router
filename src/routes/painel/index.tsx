import { createFileRoute } from "@tanstack/react-router";
import { Painel } from "../../pages/Painel";

export const Route = createFileRoute("/painel/")({
  component: () => <Painel />,
});
