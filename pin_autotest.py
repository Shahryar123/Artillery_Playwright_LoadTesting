import time
import pyautogui
import pygetwindow as gw
import logging
import os
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def find_pin_window():
    possible_titles = [
        "Windows Security",
        # "Windows Hello",
        # "Microsoft Windows",
        # "Sign-in options",
        # "Windows Hello PIN"
    ]
    
    windows = gw.getAllWindows()
    for window in windows:
        if window.title:
            for title in possible_titles:
                # logger.info(f"Checking window title: {window.title}")
                # logger.info(f"Against possible title: {title}")
                if title.lower() in window.title.lower():
                    logger.info(f"✅ Found PIN window: {window.title}")
                    return window
    return None

def main():
    logger.info("Waiting for PIN popup... (Ctrl+C to stop)")
    PIN = os.getenv("WINDOWS_PIN")   # ⚠️ Test PIN only, do not use your real one
    print(f"PIN: {PIN}")

    while True:     
        win = find_pin_window()
        if win:
            try:
                # Bring window to front
                win.activate()
                time.sleep(2)

                # Type PIN
                logger.info("Typing PIN...")
                pyautogui.typewrite(PIN, interval=0.1)

                # Press Enter
                pyautogui.press("enter")
                logger.info("✅ PIN entered successfully!")
            except Exception as e:
                logger.error(f"Error typing PIN: {e}")
        time.sleep(3)

if __name__ == "__main__":
    main()
