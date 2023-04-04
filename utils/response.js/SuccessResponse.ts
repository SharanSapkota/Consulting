const buildResponse = (res: any, success: boolean, data: any, message: string) => {
    return res.status(200).json({
      success: success,
      message: message || (success && "success"),
      data: data,
    });
  };
  
  export { buildResponse };
  