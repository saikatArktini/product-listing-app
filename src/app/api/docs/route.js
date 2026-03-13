import swaggerSpec from "@/swagger/swaggerConfig";

export async function GET() {
  return new Response(JSON.stringify(swaggerSpec), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}